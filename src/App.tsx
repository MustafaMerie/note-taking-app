import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import { Routes, Route, Navigate } from "react-router-dom"
import { NewNote } from "./NewNote"
import { useLocalStorage } from "./useLocalStorage"

export type Note = {
  id: string
} & NoteData

type RowNote = {
  id: string
} & RowNoteData

type RowNoteData = {
  title: string
  markdown: string
  tagIds: string[]
}


export type NoteData = {
  title: string
  markdown: string
  tags: Tag[]
}

export type Tag = {
  id: string
  label: string
}

function App() {

  const [notes, setNotes] = useLocalStorage<RowNote[]>("NOTES", [])
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", [])

  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/new" element={<NewNote />} />
        <Route path="/:id">
          <Route index element={<div>Show</div>} />
          <Route path="edit" element={<div>Edit</div>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </Container>
  )
}

export default App
