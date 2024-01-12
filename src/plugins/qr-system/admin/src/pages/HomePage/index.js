// @ts-nocheck
/*
 *
 * HomePage
 *
 */

import React, {useState} from 'react';
// import PropTypes from 'prop-types';
import FormFields from '../../components/form/formFields';
import {
  BaseHeaderLayout, 
  ContentLayout, 
  Layout,
} from '@strapi/design-system';



const HomePage = () => {
  return (
    <Layout>
      <BaseHeaderLayout
        title="Plugin"
        subtitle="Generar QR"
        as="h2"
      />
      <ContentLayout>
        <FormFields/>
      </ContentLayout>
      
    </Layout>
     
  );
};



export default HomePage;
