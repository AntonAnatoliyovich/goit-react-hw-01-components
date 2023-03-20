import { Table, Thead, TheadTr, TheadTh, Tbody, TbodyTr, TbodyTd } from "./TransactionHistory.styled";
import PropTypes from "prop-types";

export const TransactionHistory = ({ items }) => {
    return (
        <Table>
            <Thead>
                <TheadTr>
                    <TheadTh>Type</TheadTh>
                    <TheadTh>Amount</TheadTh>
                    <TheadTh>Currency</TheadTh>
                </TheadTr>
            </Thead>

            <Tbody>
                {items.map((item) => (
                    <TbodyTr key={item.id}>
                        <TbodyTd>{item.type}</TbodyTd>
                        <TbodyTd>{item.amount}</TbodyTd>
                        <TbodyTd>{item.currency}</TbodyTd>
                    </TbodyTr>
                ))}
            </Tbody>
        </Table>
    );
};

TransactionHistory.propTypes = {
    type: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string,
};
