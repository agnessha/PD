import React, {useState} from 'react'
import './Today.css'
import {connect} from "react-redux";
import {month, today} from '../../jsDate/date'
import { AddIcon } from '@chakra-ui/icons'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Flex,
    Spacer,
    Tooltip,
    Button, ButtonGroup,
    useDisclosure,
    Input
} from '@chakra-ui/react'


const Today = (props) => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [noteValue, changeNoteValue] = useState('')

    let changeValue = (event) => {
        changeNoteValue(event.target.value)
    }


    return (
        <div className={props.navbarClass? 'today' : 'today' + ' ' + 'big'}>
            <div className='todayInner'>
                <div className="todayInnerHeader">
                    <Flex >
                <div className="todayInnerDate">
                    <span className='todayBold'>
                        Today
                    </span>
                    {today} {month}
                </div>
                    <Spacer />
                    <div className='addNote'>
                        <Tooltip label='Create a new note!'>
                        <AddIcon cursor={'pointer'} onClick={onOpen}/>
                        </Tooltip>
                        <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>New note</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    <Input placeholder='Basic usage' value={noteValue} onChange={changeValue}/>
                                </ModalBody>

                                <ModalFooter>
                                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                                        Add
                                    </Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </div>
                    </Flex>
                </div>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        navbarClass: state.navbar.navbarActive
    }
}

const TodayCon = connect(mapStateToProps, null)(Today)


export default TodayCon;