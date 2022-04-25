import React, { useState } from "react";
import "../../App.css";
import { connect } from "react-redux";
import { calendarDate, dateForNote, month, today} from "../../jsDate/date";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

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
    Button,
    useDisclosure,
    Input,
    Box,
    Wrap, WrapItem,
    Grid, GridItem,
} from "@chakra-ui/react";
import Notes from "./Notes/Notes";
import { v4 as uuidv4 } from "uuid";
import store from "../../redux/store";
import Note from "./Notes/Notes";
import {TodayDelete} from "./TodayDelete";



const Today = (props) => {
    console.log('render')
    const { isOpen, onOpen, onClose } = useDisclosure();
    const emptyNote = {
        text: "",
        id: uuidv4(),
        date: today + " " + month,
        normalDate: calendarDate,
        completed: false,
        start: new Date(),
        end: new Date(),
        color: ''

    };
    const [note, setNote] = useState(emptyNote);
    const [notes, setNotes] = useState(() => {
        const saved = localStorage.getItem("notes");
        const initialValue = JSON.parse(saved);
        return initialValue || [];
    });

    let warning = !note.text.length > 0;

    function saveNote() {
        let newNotes = [note, ...notes];
        localStorage.setItem("notes", JSON.stringify(newNotes));
        setNotes(newNotes);
        createNote("");
    }

    function createNote(value) {
        let newNote = emptyNote;
        newNote.text = value;
        newNote.start = new Date();
        newNote.end = newNote.start
        newNote.color = '#ab47bc'
        newNote.normalDate = calendarDate
        setNote(newNote);
    }
    function deleteNote(currentId) {
        const filtered = notes.filter((note) => note.id !== currentId);
        localStorage.setItem("notes", JSON.stringify(filtered));
        const newNotes = localStorage.getItem("notes");
        const initialValue = JSON.parse(newNotes) || [];
        setNotes(initialValue);
    }

    function noteStatus(noteId) {

        const index = notes.findIndex((element, index) => {
            if (element.id === noteId) {
                return true
            }
        })
        notes.map((currentNote) => {
            if (currentNote.id === noteId) {
                currentNote.completed = !currentNote.completed;
                notes[index] = currentNote
                console.log(notes)
                console.log(currentNote)
                localStorage.setItem("notes", JSON.stringify(notes));
                const newNotes = localStorage.getItem("notes");
                const initialValue = JSON.parse(newNotes) || [];
                setNotes(initialValue);
            }
        });
    }

    function setNewNote(newNote) {
        setNote({
            ...newNote,
        });
        console.log(note)
    }
    function deleteAllNotes() {
        setNotes([]);
        localStorage.removeItem("notes");
    }
    function updateNote(noteId, newValue) {
        const index = notes.findIndex((element, index) => {
            if (element.id === noteId) {
                return true
            }
        })
        notes.map((currentNote) => {
            if (currentNote.id === noteId) {
                currentNote.text = newValue
                notes[index] = currentNote
                // let newNote = {
                //     text: newValue,
                //     start: currentNote.start,
                //     color: '#ab47bc',
                //     id: currentNote.id,
                //     date: currentNote.date,
                //     completed: currentNote.completed,
                //     end: currentNote.end,
                // }
                console.log(notes)
                console.log(currentNote)
                console.log(newValue)
                // localStorage.setItem("notes", JSON.stringify(notes));
                // const newNotes = localStorage.getItem("notes");
                // const initialValue = JSON.parse(newNotes) || [];
                // setNotes(initialValue);
                return true
            }
        });
    }



    return (
        <div className={"today" + " " + "big"}>
            <Box backgroundColor="#ffffff">
                <div className="todayInner">
                    <div className="todayInnerHeader">
                        <Flex>
                            <div className="todayInnerDate">
                                <span className="todayBold">Today</span>
                                {today} {month}
                            </div>
                            <Spacer />
                            <Tooltip label="Delete all notes!">
                                <TodayDelete deleteNotes={deleteAllNotes}>

                                </TodayDelete>
                                {/*<DeleteIcon*/}
                                {/*    margin="6px 15px 4px"*/}
                                {/*    cursor={"pointer"}*/}
                                {/*    onClick={() => {*/}
                                {/*        setNotes([]);*/}
                                {/*        localStorage.removeItem("notes");*/}
                                {/*    }}*/}
                                {/*/>*/}
                            </Tooltip>
                            <div className="addNote">
                                <Tooltip label="Create a new note!">
                                    <AddIcon cursor={"pointer"} onClick={onOpen} />
                                </Tooltip>
                                <Modal isOpen={isOpen} onClose={onClose}>
                                    <ModalOverlay />
                                    <ModalContent>
                                        <ModalHeader>New note</ModalHeader>
                                        <ModalCloseButton />
                                        <ModalBody>
                                            <Input
                                                placeholder="Basic usage"
                                                value={note.text}
                                                onChange={(event) => {
                                                    createNote(event.target.value);
                                                }}
                                            />
                                        </ModalBody>

                                        <ModalFooter>
                                            <Button
                                                disabled={warning}
                                                colorScheme="pink"
                                                mr={3}
                                                onClick={() => {
                                                    saveNote(warning);
                                                    onClose();
                                                }}
                                            >
                                                Add
                                            </Button>
                                        </ModalFooter>
                                    </ModalContent>
                                </Modal>
                            </div>
                        </Flex>
                    </div>
                    <div className="todayInnerNotes">
                        <ResponsiveMasonry
                            columnsCountBreakPoints={{350: 1, 500: 2, 900: 2}}
                        >
                            <Masonry gutter="15px">
                                {notes.map((n) => {
                                return (
                                <Note
                                completed={n.completed}
                                key={n.id}
                                noteId={n.id}
                                noteText={n.text}
                                noteDate={n.date}
                                deleteNote={deleteNote}
                                noteStatus={noteStatus}
                                updateNote={updateNote}
                                />
                                );
                            })}
                            </Masonry>
                        </ResponsiveMasonry>
                    </div>
                </div>
            </Box>
        </div>
    );
};

let mapStateToProps = (state) => {
    return {
        navbarClass: state.navbar.navbarActive,
    };
};

const TodayCon = connect(mapStateToProps, null)(Today);

export default TodayCon;