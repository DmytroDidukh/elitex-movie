import React, {useState} from 'react'

import ImagePlaceholderComponent from "../../components/image-placeholder";

const ImagePlaceholderContainer = ({shouldValidate, setImageFile}) => {
    const [imageLoading, setImageLoading] = useState(false)
    const [imageBase64Src, setImageBase64Src] = useState('')

    const onAddImage = (e) => {
        const file = e.target.files[0]

        if (!file.type.includes('image')) {
            return
        }

        setImageLoading(true)
        setImageFile(file)

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImageBase64Src(reader.result)
            setTimeout(() => setImageLoading(false), 500)
        };
    }

    return (
        <ImagePlaceholderComponent
            imageBase64Src={imageBase64Src}
            onAddImage={onAddImage}
            imageLoading={imageLoading}
            shouldValidate={shouldValidate}
        />
    )
}

export default ImagePlaceholderContainer
