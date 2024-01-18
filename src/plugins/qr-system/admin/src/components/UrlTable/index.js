import React from "react";
import { Table, 
    Thead, 
    Tbody, 
    Tr, 
    Td, 
    Th, 
    Box, 
    Typography, 
    VisuallyHidden, 
    BaseCheckbox, 
    IconButton, 
    Flex, 
    TFooter,
    Tag
 } from '@strapi/design-system';
import { Trash, Information } from '@strapi/icons';

export default function UrlTable({urlData, deleteUrl}){
    var longi = urlData.length;
    var urlComplete = "";
    console.log("longi", longi);
    console.log("props", urlData);
    
    return( 
        <div>
            {
                longi === 0 ? (
                    <Table colCount={5} rowCount={1} footer={<Typography  variant="sigma">No Qrs registered yet</Typography>}>
                        <Thead>
                            <Tr>
                                <Th action="">
                                    <Typography variant="sigma">Domain</Typography>
                                </Th>
                                <Th action="">
                                    <Typography variant="sigma">Slug</Typography>
                                </Th>
                                <Th action="">
                                    <Typography variant="sigma">QR</Typography>
                                </Th>
                                <Th action="">
                                    <Typography variant="sigma">UpdateAT</Typography>
                                </Th>
                                <Th action="">
                                    <VisuallyHidden>Option</VisuallyHidden>
                                </Th>
                            </Tr>
                        </Thead>
                    </Table>
                ) : (
                    <Table colCount={5} rowCount={longi} footer="">
                        <Thead>
                            <Tr>
                                <Th action="">
                                    <Typography variant="sigma">Domain</Typography>
                                </Th>
                                <Th action="">
                                    <Typography variant="sigma">Slug</Typography>
                                </Th>
                                <Th action="">
                                    <Typography variant="sigma">QR</Typography>
                                </Th>
                                <Th action="">
                                    <Typography variant="sigma">UpdatedAT</Typography>
                                </Th>
                                <Th action="">
                                    <VisuallyHidden>Option</VisuallyHidden>
                                </Th>
                            </Tr>
                        </Thead>
                <Tbody>
                    {urlData.map(data => <Tr key={data.id}>
                        <Td>
                            <Typography textColor="neutral800">{data.urlRedirect}</Typography>
                        </Td>
                        <Td>
                            <a href={data.urlRedirect+"/"+data.slug} target="_blank">{data.slug}</a>
                            {/* <Typography textColor="neutral800">{data.slug}</Typography> */}
                        </Td>
                        <Td>
                            <a href={data.qrImage} target="_blank">Clic</a>
                        </Td>
                        <Td>
                            <Typography textColor="neutral800">{data.updatedAt}</Typography>
                        </Td>
                        <Td>
                        <Flex>
                            <Box paddingLeft={1}>
                                <IconButton onClick={() => deleteUrl(data)} label="Delete" noBorder icon={<Trash />} />
                            </Box>
                        </Flex>
                        </Td>
                    </Tr>)}
                </Tbody>
            </Table>
                )
            }
            
        </div>
    );
  
}
