import React, {
  FC,
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { MultiSelectDropdown } from "./multi-select-dropdown"
import styles from "./styles.module.pcss"
import { FiChevronDown, MdOutlineClear } from "react-icons/all"
import useOnClickOutside from "~shared/hooks/useOnClickOutside"

interface SelectProps extends HTMLAttributes<HTMLDivElement> {
  placeholder?: string
  label?: string
  values: string[]
  onValuesChange: (value: string[]) => void
  options: { value: string; label: string }[]
  searchable?: boolean
}
const MultiSelect: FC<SelectProps> = forwardRef(
  (
    {
      label,
      placeholder,
      options,
      values,
      onValuesChange,
      searchable,
      ...other
    }: SelectProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const selectRef = useRef(null)

    const [dropdownIsOpened, setDropdownIsOpened] = useState(false)
    const [selectedItems, setSelectedItems] = useState<
      { value: string; label: string }[]
    >([])
    const [inputInFocus, setInputInFocus] = useState(false)

    const handleValueChange = () => {
      setSelectedItems(
        values.map((value) => ({
          value: value,
          label: options.find((option) => option.value === value)!.label,
        }))
      )
    }

    const cachedValues = useMemo(() => values, [values, onValuesChange])

    useEffect(() => {
      handleValueChange()
    }, [cachedValues])

    const [optionsList, setOptionsList] = useState(options)
    const [inputValue, setInputValue] = useState("")

    const itemsIsSelected = selectedItems.length > 0

    const onChangeInputValue = (value: string) => {
      setInputValue(value)
    }

    useEffect(() => {
      setOptionsList(
        options.filter((el) =>
          el.label.toLowerCase().includes(inputValue.toLowerCase())
        )
      )
    }, [inputValue])

    const openDropdown = () => {
      setDropdownIsOpened(true)
    }

    const onSelectItem = (item: { value: string; label: string }) => {
      console.log(item)
      setSelectedItems((prev) => {
        const values = prev.map((item) => item.value)
        onValuesChange([item.value, ...values])
        return [...prev, item]
      })

      setInputValue("")
    }

    const removeAllSelectedItems = (
      e: React.MouseEvent<SVGElement, MouseEvent>
    ) => {
      e.stopPropagation()
      onValuesChange([])
      setSelectedItems([])
      setDropdownIsOpened(false)
      setInputValue("")
    }
    const onRemoveItem = (value: string) => {
      setSelectedItems((prev) => prev.filter((item) => item.value !== value))
      onValuesChange(values.filter((itemValue) => itemValue !== value))
    }

    useOnClickOutside(selectRef, () => {
      setDropdownIsOpened(false)
      setInputValue("")
    })

    return (
      <div ref={selectRef}>
        <div
          onClick={openDropdown}
          className={styles.selectContainer}
          ref={ref}
          {...other}
        >
          <div>
            {label && <label>{label}</label>}
            <div className={styles.selectInput}>
              {itemsIsSelected && !inputInFocus && (
                <div className={styles.itemsContainer}>
                  <div
                    onClick={(e) => {
                      e.stopPropagation()
                      onRemoveItem(selectedItems[0].value)
                    }}
                    className={styles.item}
                  >
                    {selectedItems[0].label}
                  </div>
                  {selectedItems.length > 1 && (
                    <div className={styles.item}>
                      {selectedItems.length - 1} +
                    </div>
                  )}
                </div>
              )}
              {!itemsIsSelected && !dropdownIsOpened && (
                <div className={styles.placeholder}>{placeholder}</div>
              )}
              <input
                onFocus={() => {
                  setInputInFocus(true)
                }}
                onBlur={() => {
                  setInputInFocus(false)
                }}
                value={inputValue}
                onChange={(e) => onChangeInputValue(e.currentTarget.value)}
              />

              <div className={styles.selectIcon}>
                {itemsIsSelected ? (
                  <MdOutlineClear
                    className={"cursor-pointer"}
                    onClick={removeAllSelectedItems}
                  />
                ) : (
                  <FiChevronDown />
                )}
              </div>
            </div>

            <MultiSelectDropdown
              selectedItems={selectedItems}
              isOpen={dropdownIsOpened}
              options={optionsList}
              onSelectItem={onSelectItem}
              onRemoveItem={onRemoveItem}
            />
          </div>
        </div>
      </div>
    )
  }
)

export default MultiSelect
