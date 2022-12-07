import { useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { VscNote } from 'react-icons/vsc';
import AdjustTrasaction from '../../../../../components/ar/AdjustTrasaction';
import { useState } from 'react';
import Tooltip from '../../../../../components/ar/Tooltip';

const Services = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="space-y-3 p-5">
      <AdjustTrasaction isOpen={isOpen} onClose={onClose} />
      <h1 className="text-orange-500 underline">view other services</h1>
      <section>
        <h1 className="head mb-2">A/R invoice services detail</h1>
        <table className="w-full">
          <thead>
            <tr>
              <th>adjust</th>
              <th>service date</th>
              <th>service</th>
              <th>associate name</th>
              <th>time/out</th>
              <th>bill qty</th>
              <th>rate</th>
              <th>auth#</th>
              <th>rev code</th>
              <th>bill code</th>
              <th>charges</th>
              <th>adjustments</th>
              <th>payments </th>
              <th>balance</th>
            </tr>
          </thead>
          <tbody>
            {data.map((val, index) => (
              <tr key={index}>
                <td>
                  <Tooltip message="adjust transaction code overrides">
                    <VscNote onClick={onOpen} className="scale-150" />
                  </Tooltip>
                </td>
                <td>{val.service_date}</td>
                <td>{val.service}</td>
                <td>{val.assoc}</td>
                <td>{val.time}</td>
                <td>{val.bill}</td>
                <td>{val.rate}</td>
                <td>{val.auth}</td>
                <td>{val.rev_code}</td>
                <td>{val.bill_code}</td>
                <td>{val.charges}</td>
                <td>{val.adj}</td>
                <td>{val.payment}</td>
                <td>{val.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Services;

const data = [
  {
    service_date: '7/03/20',
    service: 'hha-hourly',
    assoc: 'frimpong-balance',
    time: '8:00am - 9:00pm',
    bill: '8.00',
    rate: '65.00',
    auth: '',
    rev_code: '572',
    bill_code: 'go516',
    charges: '$520.00',
    adj: '$0.00',
    payment: '$0.00',
    balance: '$520.00',
  },
  {
    service_date: '7/03/20',
    service: 'hha-hourly',
    assoc: 'frimpong-balance',
    time: '8:00am - 9:00pm',
    bill: '8.00',
    rate: '65.00',
    auth: '',
    rev_code: '572',
    bill_code: 'go516',
    charges: '$520.00',
    adj: '$0.00',
    payment: '$0.00',
    balance: '$520.00',
  },
  {
    service_date: '7/03/20',
    service: 'hha-hourly',
    assoc: 'frimpong-balance',
    time: '8:00am - 9:00pm',
    bill: '8.00',
    rate: '65.00',
    auth: '',
    rev_code: '572',
    bill_code: 'go516',
    charges: '$520.00',
    adj: '$0.00',
    payment: '$0.00',
    balance: '$520.00',
  },
  {
    service_date: '7/03/20',
    service: 'hha-hourly',
    assoc: 'frimpong-balance',
    time: '8:00am - 9:00pm',
    bill: '8.00',
    rate: '65.00',
    auth: '',
    rev_code: '572',
    bill_code: 'go516',
    charges: '$520.00',
    adj: '$0.00',
    payment: '$0.00',
    balance: '$520.00',
  },
  {
    service_date: '7/03/20',
    service: 'hha-hourly',
    assoc: 'frimpong-balance',
    time: '8:00am - 9:00pm',
    bill: '8.00',
    rate: '65.00',
    auth: '',
    rev_code: '572',
    bill_code: 'go516',
    charges: '$520.00',
    adj: '$0.00',
    payment: '$0.00',
    balance: '$520.00',
  },
  {
    service_date: '7/03/20',
    service: 'hha-hourly',
    assoc: 'frimpong-balance',
    time: '8:00am - 9:00pm',
    bill: '8.00',
    rate: '65.00',
    auth: '',
    rev_code: '572',
    bill_code: 'go516',
    charges: '$520.00',
    adj: '$0.00',
    payment: '$0.00',
    balance: '$520.00',
  },
];
