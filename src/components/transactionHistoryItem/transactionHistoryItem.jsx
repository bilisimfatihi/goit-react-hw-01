import styles from "./transactionHistoryItem.module.css"

const TransactionHistoryItem = ({ type, amount, currency }) => {
    return (
        <tr>
            <td>{currency}</td>
            <td>{amount}</td>
            <td>{type}</td>
        </tr>
    );
};

export default TransactionHistoryItem;