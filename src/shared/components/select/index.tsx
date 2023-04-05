import React, {
  FC,
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react"
import { SelectDropdown } from "./select-dropdown"
import styles from "./styles.module.pcss"
import { FiChevronDown, MdOutlineClear } from "react-icons/all"
import useOnClickOutside from "~shared/hooks/useOnClickOutside"

interface SelectProps extends HTMLAttributes<HTMLDivElement> {
  placeholder?: string
  label?: string
  value: string
  onValueChange: (value: string) => void
  options: { value: string; label: string }[]
  searchable?: boolean
}
const Select: FC<SelectProps> = forwardRef(
  (
    {
      label,
      placeholder,
      options,
      value,
      onValueChange,
      searchable,
      ...other
    }: SelectProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const selectRef = useRef(null)
    const [dropdownIsOpened, setDropdownIsOpened] = useState(false)
    const [optionsList, setOptionsList] = useState(options)
    const [inputValue, setInputValue] = useState("")

    const selectedItem = options.find((el) => el.value === value)
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

    const onSelectItem = (value: string) => {
      onValueChange(value)

      setInputValue("")
      setDropdownIsOpened(false)
    }

    const removeSelectItem = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
      e.stopPropagation()
      onValueChange("")
      setDropdownIsOpened(false)
      setInputValue("")
    }

    useOnClickOutside(selectRef, () => {
      setDropdownIsOpened(false)
    })

    const onInputBlur = () => {
      setInputValue("")
    }

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
              {selectedItem && !dropdownIsOpened && (
                <div className={styles.value}>{selectedItem.label}</div>
              )}
              {!selectedItem && !dropdownIsOpened && (
                <div className={styles.placeholder}>{placeholder}</div>
              )}
              <input
                onBlur={onInputBlur}
                value={inputValue}
                onChange={(e) => onChangeInputValue(e.currentTarget.value)}
              />

              <div className={styles.selectIcon}>
                {selectedItem ? (
                  <MdOutlineClear
                    className={"cursor-pointer"}
                    onClick={removeSelectItem}
                  />
                ) : (
                  <FiChevronDown />
                )}
              </div>
            </div>

            <SelectDropdown
              currentSelectedItem={value}
              isOpen={dropdownIsOpened}
              options={optionsList}
              onSelectItem={onSelectItem}
            />
          </div>
        </div>
      </div>
    )
  }
)

export default Select
