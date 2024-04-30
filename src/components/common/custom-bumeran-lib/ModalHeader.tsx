
import { IconButton } from "@chakra-ui/react"
import { Header } from "./Modal.styles"
import { MdClose } from "react-icons/md";

export const ModalHeader = ({
    onClose, 
    title
}: {
   onClose: () => void,
   title: string 
}) => {

    return (
        <Header>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div>{title}</div>
          </div>
          <div>
          {/* <IconButton 
            icon={<CloseIcon />}
            id="closeButton-confirmModal"
            size="s"            
            onClick={onClose}
          />             */}
          <IconButton
            colorScheme='blue'
            aria-label='Search database'
            icon={<MdClose />}
          />
          </div>
        </Header>
    )
}