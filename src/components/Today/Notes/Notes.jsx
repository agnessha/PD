import React from 'react'
import '../Today.css'
import {month, today} from "../../../jsDate/date";
import { StarIcon, DeleteIcon } from '@chakra-ui/icons'
import {
    Spacer,
    Box,
    Image,
    Badge,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
    Checkbox,
    Flex
} from "@chakra-ui/react";



function Notes(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div className='notes'>
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' >
            <Box p='6' bg='#FDEBD0'>
                <Box display='flex' alignItems='baseline'>
                    <Badge borderRadius='full' px='2' backgroundColor='#D2B4DE'>
                        Today
                    </Badge>
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='2'
                    >
                        {props.noteDate}
                    </Box>
                    <Spacer />
                    <Box>
                        <DeleteIcon onClick={() => {
                            onOpen();
                        }} cursor='pointer'/>
                        <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalCloseButton />
                                <ModalHeader>Are you sure?</ModalHeader>

                                <ModalBody>
                                    <Text>

                                    </Text>
                                </ModalBody>

                                <ModalFooter>
                                    <Button colorScheme='blue' mr={3} onClick={() => {
                                        props.deleteNote(props.noteId)
                                        onClose();
                                    }}>
                                        Delete
                                    </Button>
                                    <Button variant='ghost' onClick={onClose}>Cancel</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </Box>
                </Box>

                <Flex paddingTop='15px'>
                    <Box>
                        {props.noteText}
                    </Box>
                    <Spacer />
                    <Box>
                        <Checkbox size='md' colorScheme='green' defaultChecked={props.completed} onChange={() => {
                            props.noteStatus(props.noteId);
                        }}/>
                    </Box>

                </Flex>

            </Box>
        </Box>
        </div>
    )
}

export default Notes;