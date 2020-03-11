const singleprofile= document.querySelector('.single-profile');
const container= document.querySelector('.container');
const container1= document.querySelector('.container-1');
const path=document.querySelector('.path');
function showchat()
{
  
  container.classList.add('display-chat');
  container1.classList.add('block-profile');
}

function hidechat()
{
    container.classList.remove('display-chat');
    container1.classList.remove('block-profile');
}

singleprofile.addEventListener('click',this.showchat);
path.addEventListener('click',this.hidechat);