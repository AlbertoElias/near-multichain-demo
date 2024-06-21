import styles from "./amount-input.module.css";

export default function AmountInput({
  inputValue,
  amountInputChange,
} : {
  inputValue: string,
  amountInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}) {

  return (
    <>
      <label className={styles.amountInputTitle} htmlFor="amount-input">Amount</label>
      <input
        className={styles.amountInput}
        type="text"
        id="amount-input"
        onChange={amountInputChange}
        min={0}
        value={inputValue}
        required />
    </>
  )
}