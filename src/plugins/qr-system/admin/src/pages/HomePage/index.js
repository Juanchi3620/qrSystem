// @ts-nocheck
/*
 *
 * HomePage
 *
 */

import React, { useEffect, useState } from "react";
// import PropTypes from 'prop-types';
import FormFields from "../../components/form/formFields";
import { BaseHeaderLayout, ContentLayout, Layout } from "@strapi/design-system";

import { LoadingIndicatorPage } from "@strapi/helper-plugin";

import  urlRequests  from "../../api/url";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [urlData, setUrlData] = useState([]);

  const fecthData = async () => {
    const response = await urlRequests.getAllUrls();
    setUrlData(response);
    setIsLoading(false);
  }


  useEffect(async () => {
    await fecthData();
  }, [])

  async function addUrl(data) {
    await urlRequests.addUrl(data);
    await fecthData();
  }

  if (isLoading) {
    return <LoadingIndicatorPage />;
  }
  return (
    <Layout>
      <BaseHeaderLayout title="Plugin" subtitle="Generar QR" as="h2" />
      <ContentLayout>
        <FormFields addUrl={addUrl}/>
      </ContentLayout>
    </Layout>
  );
};

export default HomePage;
