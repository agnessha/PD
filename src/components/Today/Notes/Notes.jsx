import React from 'react'
import '../../../App.css'
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
    Flex,
    WrapItem,
    Container,
    GridItem
} from "@chakra-ui/react";




function Notes(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        // <GridItem >
        <div className='notes'>
        <Box  borderWidth='1px' borderColor='#ab47bc' borderRadius='lg' overflow='hidden' >
            <Box p='6' bg='#ffffff'>
                <Box display='flex' alignItems='baseline'>
                    <Badge borderRadius='full' mr='2' px='2' display={today + ' ' + month === props.noteDate ? 'flex' : 'none'} backgroundColor='#D2B4DE'>
                        {today + ' ' + month === props.noteDate ? 'Today' : ''}
                    </Badge>
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                    >
                        {props.noteDate}
                    </Box>
                    <Spacer />
                    <Box>

                            <Checkbox
                                size='md'
                                padding='7px 20px'
                                isChecked={props.completed}
                                colorScheme='purple'
                                defaultChecked={props.completed}
                                onChange={() => {
                                props.noteStatus(props.noteId);
                            }}/>

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

                <Container paddingTop='15px'>
                    <Box>
                        {props.noteText}
                    </Box>
                    <Spacer />


                </Container>

            </Box>
        </Box>
        </div>
        // </GridItem>
    )
}

export default Notes;