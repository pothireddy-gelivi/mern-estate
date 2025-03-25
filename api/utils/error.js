export const errorHandler = (stausCode,message) =>{
    const error =new Error();
    error.stausCode=stausCode;
    error.message=message;
    return error;

};