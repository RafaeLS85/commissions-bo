import React from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { MASSIVE_CHARGE_CONSTANTS } from "@/constants/massive-charge";
import { Divider, Link } from "@chakra-ui/react";
import { MdOutlineFileDownload } from "react-icons/md";

interface Props {
  title: string;
  href: string;
  fileName: string;
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  display: inline-flex;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

const Title = styled.div`
  color: #000000;
  font-size: 14px;
  font-family: Work Sans;
  font-weight: 500;
  line-height: 18px;
  word-wrap: break-word;
`;

export const DownloadContainer = ({ title, href, fileName }: Props) => {  
  const id = fileName.split("-")[0].split(" ")[0];

  const { download } = MASSIVE_CHARGE_CONSTANTS.download_templates;
  const { snackbar_messages } = MASSIVE_CHARGE_CONSTANTS;  

  const handleDownload = () => {
    const getFile = new Promise((resolve) => {
      const a = document.createElement("a");     
      a.id = id;
      a.href = href;     
      a.download = fileName; 
      document.body.appendChild(a);      
      a.click();
      return resolve(( a.remove() ));
    });
   
    toast.promise(getFile, { 
      success: {
        render() {
          return snackbar_messages.downloaded;
        },
        icon: false,
      },      
    });
  };

  return (
    <>
      <Container>
        <Title>{title}</Title>
        <Link>
         <MdOutlineFileDownload />
          <a
            id={id}
            download={fileName}
            data-id={"download-" + id}
            onClick={handleDownload}
          >
            {download}
          </a>
        </Link>
      </Container>
      <Divider />
    </>
  );
};
