

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
]

export const dateForNote = new Date()


export const today = dateForNote.getDate();

export function setNormalDate(dat) {
    let res = new Date(dat)
    return res
}

export const month = monthNames[dateForNote.getMonth()]

