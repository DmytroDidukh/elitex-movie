import React, {useState} from 'react'

import NewMovieModalComponent from '../../components/new-movie-modal'
import ApiService from "../../db/api";

const NewMovieModalContainer = ({modalOpen, handleModalClose, setMovies}) => {
    const [imageFile, setImageFile] = useState(null)
    const [titleValue, setTitleValue] = useState('')
    const [descriptionValue, setDescriptionValue] = useState('')
    const [shouldValidate, setShouldValidate] = useState(false)
    const [loading, setLoading] = useState(false)

    const afterSubmit = () => {
        setShouldValidate(false)
        setTitleValue('')
        setDescriptionValue('')
        setImageFile(null)
        setLoading(false)
        handleModalClose()
    }

    const beforeClose = () => {
        setShouldValidate(false)
        handleModalClose()
    }

    const onSubmit = async () => {
        if (!titleValue.trim() || !imageFile) {
            setShouldValidate(true)
            return
        }

        setLoading(true)

        const src = await ApiService.uploadImage(imageFile, imageFile.name)
        const newMovie = {
            title: titleValue,
            description: descriptionValue,
            image: src,
            created: Date.now()
        }

        setMovies(prev => [newMovie, ...prev])
        ApiService.saveMovieToDb(newMovie)

        afterSubmit()
    }

    return (
        <NewMovieModalComponent
            modalOpen={modalOpen}
            handleModalClose={handleModalClose}
            beforeCloseHandler={beforeClose}
            shouldValidate={shouldValidate}
            imageFile={imageFile}
            titleValue={titleValue}
            descriptionValue={descriptionValue}
            setImageFile={setImageFile}
            setTitleValue={setTitleValue}
            setDescriptionValue={setDescriptionValue}
            onSubmit={onSubmit}
            loading={loading}
        />
    )
}

export default NewMovieModalContainer;
