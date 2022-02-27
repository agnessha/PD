import React, { useState } from "react";
import "./Today.css";
import { connect } from "react-redux";
import { month, today } from "../../jsDate/date";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
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
} from "@chakra-ui/react";
import Notes from "./Notes/Notes";
import { v4 as uuidv4 } from "uuid";



const Today = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const emptyNote = {
        text: "",
        id: uuidv4(),
        date: today + " " + month,
        completed: false,
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
        var newNote = emptyNote;
        newNote.text = value;
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
        notes.map((currentNote) => {
            if (currentNote.id === noteId) {
                currentNote.completed = !currentNote.completed;
                const filtered = notes.filter((note) => note.id !== noteId);
                console.log(filtered)
                console.log(currentNote)
                let changedNotes = [
                    currentNote,
                        ...filtered,

                ]
                console.log(changedNotes)
                localStorage.setItem("notes", JSON.stringify(changedNotes));
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

    return (
        <div className={props.navbarClass ? "today" : "today" + " " + "big"}>
            <Box backgroundColor="#FEF5E7">
                <div className="todayInner">
                    <div className="todayInnerHeader">
                        <Flex>
                            <div className="todayInnerDate">
                                <span className="todayBold">Today</span>
                                {today} {month}
                            </div>
                            <Spacer />
                            <Tooltip label="Delete all notes!">
                                <DeleteIcon
                                    margin="6px 15px 4px"
                                    cursor={"pointer"}
                                    onClick={() => {
                                        setNotes([]);
                                        localStorage.removeItem("notes");
                                    }}
                                />
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
                                                colorScheme="blue"
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
                        {notes.map((n) => {
                            return (
                                <Notes
                                    completed={n.completed}
                                    key={n.id}
                                    noteId={n.id}
                                    noteText={n.text}
                                    noteDate={n.date}
                                    deleteNote={deleteNote}
                                    noteStatus={noteStatus}
                                />
                            );
                        })}
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