import { Table, Thead, TheadTr, TheadTh, Tbody, TbodyTr, TbodyTd } from "./TransactionHistory.styled";
import PropTypes from "prop-types";

export const TransactionHistory = ({ items }) => {
    return (
        <Table>
            <Thead>
                <TheadTr>
                    <TheadTh className='thead-th'>Type</TheadTh>
                    <TheadTh className='thead-th'>Amount</TheadTh>
                    <TheadTh className='thead-th'>Currency</TheadTh>
                </TheadTr>
            </Thead>

            <Tbody>
                {items.map((item) => (
                    <TbodyTr key={item.id} className='tbody-tr'>
                        <TbodyTd className='tbody-td'>{item.type}</TbodyTd>
                        <TbodyTd className='tbody-td'>{item.amount}</TbodyTd>
                        <TbodyTd className='tbody-td'>{item.currency}</TbodyTd>
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
