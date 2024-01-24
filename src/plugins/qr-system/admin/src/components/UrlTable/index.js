/* import React, { useState } from "react";
import { Table, 
    Thead, 
    Tbody, 
    Tr, 
    Td, 
    Th, 
    Box, 
    Typography, 
    VisuallyHidden, 
    IconButton, 
    Flex,
    TextInput,
    Button
 } from '@strapi/design-system';
import { Trash, Pencil } from '@strapi/icons';

function UrlInput({ value, onChange }) {
    return (
      <TextInput
        type="text"
        aria-label="url-input"
        name="url-input"
        error={value.length < 1 ? "Please fill all fields" : ""}
        onChange={onChange}
        value={value}
      />
    );
  }
export default function UrlTable({urlData, deleteUrl, editUrl}){
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
                                    <Typography variant="sigma">Url</Typography>
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
                    <Table colCount={5} rowCount={10} footer="">
                        <Thead>
                            <Tr>
                                <Th action="">
                                    <Typography variant="sigma">Url</Typography>
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
                    
                    {urlData.map((data) => {
                        const [inputValue, setInputValue] = useState(data.urlRedirect);
                        const [isEdit, setIsEdit] = useState(false);
                        return (
                        <Tr key={data.id}>
                            <Td>
                                {isEdit ? (
                                    <UrlInput
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                  />
                                    ) : (
                                        <Typography textColor="neutral800">{data.urlRedirect}</Typography>
                                    )    
                                }
                                
                            </Td>
                            <Td>
                                <a href={"http://localhost:1337/qr-system/find/"+data.slug} target="_blank">{data.slug}</a>
                            </Td>
                            <Td>
                                <a href={data.qrImage} target="_blank">Clic</a>
                            </Td>
                            <Td>
                                <Typography textColor="neutral800">{data.updatedAt}</Typography>
                            </Td>
                            <Td>
                                {isEdit ? (
                                    <Flex style={{ justifyContent: "end" }}>
                                    <Button
                                        onClick={() =>  {setIsEdit(false); editUrl(data.id, { urlRedirect: inputValue})}}
                                    >
                                      Save
                                    </Button>
                                  </Flex>
                                ) : (
                                    <Flex>
                                        <Box paddingLeft={1}>
                                            <IconButton onClick={() => deleteUrl(data)} label="Delete" noBorder icon={<Trash />} />
                                        </Box>
                                        <Box paddingLeft={1}>
                                            <IconButton onClick={() => setIsEdit(true)} label="Edit" noBorder icon={<Pencil />} />
                                        </Box>
                                    </Flex>
                                )}
                            
                            </Td>
                        </Tr>
                        )
                    })}
                </Tbody>
            </Table>
                )
            }
            
        </div>
    );
  
} */

import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
  Box,
  Typography,
  VisuallyHidden,
  IconButton,
  Flex,
  TextInput,
  Button
} from '@strapi/design-system';
import { Trash, Pencil } from '@strapi/icons';

function UrlInput({ value, onChange }) {
  return (
    <TextInput
      type="text"
      aria-label="url-input"
      name="url-input"
      error={value.length < 1 ? "Please fill all fields" : ""}
      onChange={onChange}
      value={value}
    />
  );
}

export default function UrlTable({ urlData, deleteUrl, editUrl }) {
  const [editData, setEditData] = useState({
    id: null,
    urlRedirect: "",
    qrImage: "",
    slug: ""
  });

  const handleInputChange = (e) => {
    setEditData({
      ...editData,
      urlRedirect: e.target.value
    });
  };

  const handleEditClick = (data) => {
    setEditData({
      id: data.id,
      urlRedirect: data.urlRedirect,
      qrImage: data.qrImage,
      slug: data.slug
    });
  };

  const handleSaveClick = () => {
    editUrl(editData.id, {
      urlRedirect: editData.urlRedirect,
      qrImage: editData.qrImage,
      slug: editData.slug
    });
    setEditData({
      id: null,
      urlRedirect: "",
      qrImage: "",
      slug: ""
    });
  };

  return (
    <div>
      {urlData.length === 0 ? (
        <Table colCount={5} rowCount={1} footer={<Typography variant="sigma">No Qrs registered yet</Typography>}>
          <Thead>
            <Tr>
              <Th action="">
                <Typography variant="sigma">Url</Typography>
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
      ): (
        <Table colCount={5} rowCount={urlData.length} footer="">
          <Thead>
            <Tr>
              <Th action="">
                <Typography variant="sigma">Url</Typography>
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
            <Tbody>
                {
                    urlData.map((data) => (
                        <Tr key={data.id}>
                            <Td>
                                {editData.id === data.id ? (
                                    <UrlInput
                                    value={editData.urlRedirect}
                                    onChange={handleInputChange}
                                    />
                                ) : (
                                    <Typography textColor="neutral800">{data.urlRedirect}</Typography>
                                )}
                            </Td>
                            <Td>
                                <a href={"http://localhost:1337/qr-system/find/"+data.slug} target="_blank">{data.slug}</a>
                            </Td>
                            <Td>
                                <a href={data.qrImage} target="_blank">Clic</a>
                            </Td>
                            <Td>
                                <Typography textColor="neutral800">{data.updatedAt}</Typography>
                            </Td>
                            <Td>
                                {editData.id === data.id ? (
                                    <Flex style={{ justifyContent: "end" }}>
                                    <Button onClick={handleSaveClick}>Save</Button>
                                    </Flex>
                                ) : (
                                    <Flex>
                                    <Box paddingLeft={1}>
                                        <IconButton onClick={() => deleteUrl(data)} label="Delete" noBorder icon={<Trash />} />
                                    </Box>
                                    <Box paddingLeft={1}>
                                        <IconButton onClick={() => handleEditClick(data)} label="Edit" noBorder icon={<Pencil />} />
                                    </Box>
                                    </Flex>
                                )}
                            </Td>

                            
                        </Tr>
                    ))
                }
            </Tbody>
        </Table>
      )} 
      
      </div>);
}
       /* : (
        <Table colCount={5} rowCount={urlData.length} footer="">
          <Thead>
            <Tr>
              <Th action="">
                <Typography variant="sigma">Url</Typography>
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
            {urlData.map((data) => (
              <Tr key={data.id}>
                <Td>
                  {editData.id === data.id ? (
                    <UrlInput
                      value={editData.urlRedirect}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <Typography textColor="neutral800">{data.urlRedirect}</Typography>
                  )}
                </Td>
                <Td>
                  <a href={http://localhost:1337/qr-system/find/${data.slug}} target="_blank">{data.slug}</a>
                </Td>
                <Td>
                  <a href={data.qrImage} target="_blank">Clic</a>
                </Td>
                <Td>
                  <Typography textColor="neutral800">{data.updatedAt}</Typography>
                </Td>
                <Td>
                  {editData.id === data.id ? (
                    <Flex style={{ justifyContent: "end" }}>
                      <Button onClick={handleSaveClick}>Save</Button>
                    </Flex>
                  ) : (
                    <Flex>
                      <Box paddingLeft={1}>
                        <IconButton onClick={() => deleteUrl(data)} label="Delete" noBorder icon={<Trash />} />
                      </Box>
                      <Box paddingLeft={1}>
                        <IconButton onClick={() => handleEditClick(data)} label="Edit" noBorder icon={<Pencil />} />
                      </Box>
                    </Flex>
                  )}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </div>
  ); 
}*/
