
export const fileUpload = async( file ) => {
    if ( !file ) throw new Error('No hay ningun archivo para subir.')
    
    const cloudURL = 'https://api.cloudinary.com/v1_1/dw8f3sxio/upload?';
    
    const formData = new FormData();
    formData.append( 'upload_preset', 'react-journal' );
    formData.append( 'file', file );

    try {
        const resp = await fetch( cloudURL, {
            method: 'POST',
            body: formData
        });

        console.log(resp);
        if ( !resp.ok ) throw new Error('No se pudo subir la imagen.')

        const cloudResp = await resp.json();
        console.log( cloudResp );
        return cloudResp
        
    } catch (error) {
        console.log(error);
        throw new Error( error.message );
    }
}