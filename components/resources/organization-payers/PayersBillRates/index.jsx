import TableSelect from '../../../structure/TableSelect';
import PayerBillRateTable from './PayerBillRateTable';
import PayerCreateBillRate from './PayerCreateBillRate';
import PayerMassDelete from './PayerMassDelete';

const PayersBillRates = () => {
  return (
    <div className="p-5">
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <TableSelect
            styles={{ width: '100px' }}
            options={['Select Agency', 'Option1']}
          />
          <TableSelect
            styles={{ width: '100px' }}
            options={['Select Service Category', 'Option1']}
          />
          <PayerCreateBillRate edit={false} />
          <div className="flex items-center gap-2">
            <p>From:</p>
            <input type="date" className="input-primary w-[118px]" />
          </div>
          <div className="flex items-center gap-2">
            <p>to:</p>
            <input type="date" className="input-primary w-[118px]" />
          </div>
          <PayerMassDelete />
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-start gap-2">
            <input
              type="text"
              className="input-primary w-28"
              placeholder="search"
            />
            <button className="btn-primary">Search</button>
          </div>
          <div className="flex items-start gap-2">
            <TableSelect options={['Spreadsheet', 'PDF']} />{' '}
            <button className="btn-primary">Export</button>
          </div>
        </div>
      </div>
      <PayerBillRateTable />
    </div>
  );
};

export default PayersBillRates;
