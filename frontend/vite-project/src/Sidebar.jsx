import catlogo from './res/catlogo.png'
function Sidebar(){
    return(
        <div class="sidebar">
            <img src={catlogo} alt='catlogo' class='catlogo'/>
            <br/>
            <p class="username">username</p>
            <p class="username">usertype</p>
            <br/>
            <br/>
            <input class="sidebar-button" type="button" value="testing"/>
        </div>
    );

}
export default Sidebar