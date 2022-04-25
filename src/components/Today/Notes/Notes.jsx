import React, {useState} from 'react'
import '../../../App.css'
import {month, today} from "../../../jsDate/date";
import { StarIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons'

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
    GridItem,
    Input
} from "@chakra-ui/react";




function Note(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isEdit, setEdit] = useState(() => {
        if (isOpen === false) {
            return false
        } else {
            return true
        }
    })
    const [newValue, setNewValue] = useState(props.noteText)
    console.log(newValue)
    return (
        // <GridItem >
        <div className='notes' onClick={onOpen}>
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
                                onClick={() => {
                                }}
                                onChange={() => {
                                    onClose()
                                    props.noteStatus(props.noteId);
                            }}/>

                        <DeleteIcon onClick={() => {
                            props.deleteNote(props.noteId)

                        }} cursor='pointer'/>
                        <Modal isOpen={isOpen} onClose={onClose} >
                            <ModalOverlay />
                            <ModalContent>
                                <ModalCloseButton />
                                <ModalHeader>
                                    <Flex>
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
                                    </Flex>
                                </ModalHeader>

                                <ModalBody>
                                    {isEdit ?
                                        <div onClick={(e) => {
                                            e.preventDefault();
                                            let text = e.currentTarget.textContent;
                                            setNewValue(text)
                                        }} className='noteInput' contenteditable="true">
                                            {newValue}
                                        </div> :
                                        <Text>
                                            {props.noteText}
                                        </Text>}

                                    <Box margin='20px 0 5px' cursor='pointer' onClick={() => {
                                        setEdit(true)
                                    }}>
                                        <Flex>
                                            <EditIcon margin='auto 5px auto 0' w={4} h={4} color="gray.500"/>
                                            <Text color='gray.500'
                                                  fontWeight='semibold'
                                                  letterSpacing='wide'>
                                                Edit this note
                                            </Text>
                                        </Flex>
                                    </Box>
                                    <Box margin='5px 0 5px' cursor='pointer' onClick={() => {
                                        props.deleteNote(props.noteId)
                                    }}>
                                        <Flex>
                                            <DeleteIcon margin='auto 5px auto 0' w={4} h={4} color="gray.500"/>
                                            <Text color='gray.500'
                                                  fontWeight='semibold'
                                                  letterSpacing='wide'>
                                                Delete this note
                                            </Text>
                                        </Flex>
                                    </Box>
                                </ModalBody>

                                <ModalFooter>
                                    <Button backgroundColor='#ab47bc'  mr={3} onClick={() => {
                                        props.updateNote(props.noteId, newValue)
                                        onClose();
                                    }}>
                                        Save
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

export default Note;