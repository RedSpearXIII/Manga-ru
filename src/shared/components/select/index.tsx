import React, {
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
  memo,
  useEffect,
  useRef,
  useState,
} from "react"
import { SelectDropdown } from "./select-dropdown"
import styles from "./styles.module.pcss"
import { FiChevronDown, MdOutlineClear } from "react-icons/all"
import { useOnClickOutside, useScreenSize } from "~shared/hooks"
import clsx from "clsx"
import { Breakpoints } from "~shared/types"

type Props = {
  placeholder?: string
  label?: string
  value: string
  onValueChange: (value: string) => void
  options: { value: string; label: string }[]
  searchable?: boolean
  color?: "slateDark"
  isLoading?: boolean
} & HTMLAttributes<HTMLDivElement>
const Select = forwardRef(
  (
    {
      label,
      placeholder,
      options,
      value,
      onValueChange,
      searchable,
      color,
      isLoading,
      ...other
    }: Props,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const colorClass = color === "slateDark" && styles.slateDark

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
    useEffect(() => {
      setOptionsList(options)
    }, [options])

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

    const { screenWidth } = useScreenSize()

    useOnClickOutside(selectRef, () => {
      if (screenWidth > Breakpoints.xxl) {
        setDropdownIsOpened(false)
      }
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
            <div
              className={clsx(
                styles.selectInput,
                colorClass,
                !searchable && "cursor-pointer"
              )}
            >
              {selectedItem && !dropdownIsOpened && (
                <div className={styles.value}>{selectedItem.label}</div>
              )}
              {!selectedItem && !dropdownIsOpened && (
                <div className={styles.placeholder}>{placeholder}</div>
              )}
              <input
                disabled={!searchable}
                className={clsx(!searchable && "cursor-pointer")}
                onBlur={onInputBlur}
                value={inputValue}
                onChange={(e) => onChangeInputValue(e.currentTarget.value)}
              />

              <div className={styles.selectIcon}>
                {selectedItem || dropdownIsOpened ? (
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
              withModal={screenWidth < Breakpoints.xxl}
              setIsOpen={setDropdownIsOpened}
              currentSelectedItem={value}
              isOpen={dropdownIsOpened}
              options={optionsList}
              onSelectItem={onSelectItem}
              label={label}
            />
          </div>
        </div>
      </div>
    )
  }
)

export default memo(Select)
