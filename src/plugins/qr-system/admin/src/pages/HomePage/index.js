// @ts-nocheck
/*
 *
 * HomePage
 *
 */

import React, { useEffect, useState } from "react";
// import PropTypes from 'prop-types';
import FormFields from "../../components/form/formFields";
import UrlTable from "../../components/UrlTable";
import { BaseHeaderLayout, ContentLayout, Layout, Box } from "@strapi/design-system";

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

  async function deleteUrl(data) {
    await urlRequests.deleteUrl(data.id);
    await fecthData();    
  }

  if (isLoading) {
    return <LoadingIndicatorPage />;
  }
  return (
    <Layout>
      <Box padding={8} background="neutral100">
        <BaseHeaderLayout title="Plugin" subtitle="Generar QR" as="h2" />
        <ContentLayout>
          <FormFields addUrl={addUrl}/>
          <br/>
          <br/>
          <UrlTable urlData={urlData} deleteUrl={deleteUrl}/>
        </ContentLayout>
      </Box>
    </Layout>
  );
};

export default HomePage;
