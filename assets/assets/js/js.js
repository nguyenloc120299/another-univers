


var isLocal = (window.location.host).match(/localhost/g)

const header = { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }

var uri = 'https://sns.playgroundvina.com/api'

var listSns = document.getElementById('list-sns')
var result = document.getElementById('result')
var listSnsContact = document.getElementById('list-snsContact')

var html = ''

var arrIcon = [
    '<i class="fab fa-facebook-f"></i>',
    '<i class="fa fa-twitter"></i>',
    '<i class="fab fa-telegram-plane"></i>',
    '<i class="fab fa-discord"></i>',
    '<i class="fab fa-youtube"></i>',
    '<i class="fab fa-linkedin-in"></i>'
]

const getInfoSns = async () => {
    try {
        let snsInfo, html = '', html_contact = ''

        snsInfo = [
            "https://www.facebook.com/mwg.anotheruniverse",
            "https://twitter.com/MWG_AU",
            "https://t.me/MWG_AnotherUniverse",
            "https://discord.com/invite/uDJuaayzvx",
            "https://www.youtube.com/channel/UCw66LHVMb6r6wiaQBZVLcsA",
            "https://www.linkedin.com/company/milky-way-galaxy/",
        ]
        snsInfo.map((item, index) => (
            html += `
                <div class="social-link">
                    ${arrIcon[index]}
                </div >
        `
        ))
        snsInfo.map((item, index) => (
            html_contact += `
                <div  class="social-link social-contact">
                    ${arrIcon[index]}
                </div >
        `
        ))
        listSns.innerHTML = html
        listSnsContact.innerHTML = html_contact
    } catch (error) {
        console.log(error);
    }
}

getInfoSns()





