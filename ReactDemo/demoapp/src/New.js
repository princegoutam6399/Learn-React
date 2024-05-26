import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
function Info(data){
    return(
        <div className='col-lg-6 col-md-4 card card-body p-4'>
            Name : {data.data.name}<br></br>
            DOB : {data.data.year}
        </div>
    )
}
export default Info;