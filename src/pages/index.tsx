/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import { ContentHeader } from '../components/ContentHeader';
import { CustomerTable } from '../components/CustomerTable';

import styles from './home.module.scss';


export default function Home() {
  return (
    <>
      <ContentHeader />
      <CustomerTable />
    </>
    )
}

