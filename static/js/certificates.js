//show and hide certificates
const show_hide_certificate_btn = document.getElementsByClassName('show_hide_certificate_btn')
const show_hide_certificate_div = document.getElementsByClassName('show_hide_certificate_div')
const certificate_arrow_down_icon = document.getElementsByClassName('certificate_arrow_down_icon')
const certificate_arrow_up_icon = document.getElementsByClassName('certificate_arrow_up_icon')
// const jinja_div = document.getElementById('jinja_div')


for (let i = 0; i < show_hide_certificate_div.length; i++){
    show_hide_certificate_div[i].hidden = true
    certificate_arrow_up_icon[i].hidden = true
    certificate_arrow_down_icon[i].hidden = false
}



for (let i = 0; i < show_hide_certificate_btn.length; i++){
    show_hide_certificate_btn[i].addEventListener('click', function(e){
        e.preventDefault()
        if (show_hide_certificate_div[i].hidden == true){
            for (let j = 0; j < show_hide_certificate_div.length; j++){
                show_hide_certificate_div[j].hidden = true
                certificate_arrow_up_icon[j].hidden = true
                certificate_arrow_down_icon[j].hidden = false
            }
            show_hide_certificate_div[i].hidden = false
            certificate_arrow_up_icon[i].hidden = false
            certificate_arrow_down_icon[i].hidden = true
        }else{
            show_hide_certificate_div[i].hidden = true
            certificate_arrow_up_icon[i].hidden = true
            certificate_arrow_down_icon[i].hidden = false
        }
    })
}



// Function that create the certificate
function certificate(certificates_container, certificate_height, certificate_img, certificate_name, issuing_institution, date_of_issue, skills_acquired){
    // Style certificates_container
    certificates_container.className = "flex gap-3 justify-between flex-wrap w-fit"

    // create a certificate inner container div
    const certificate_inner_container = document.createElement('div')
    // append certificate_inner_container in certificates_container
    certificates_container.appendChild(certificate_inner_container)
    // style certificate_inner_container
    certificate_inner_container.className = "flex flex-col border border-solid"
    certificate_inner_container.style.width = "20rem"
    certificate_inner_container.style.height = 'fit'

    // create certificate image frame
    const certificate_image_frame  = document.createElement('div')
    //append certificate_image_frame in certificate_inner_container
    certificate_inner_container.appendChild(certificate_image_frame)
    //style certificate_image_frame
    certificate_image_frame.className = "border border-solid w-full"
    certificate_image_frame.style.height = certificate_height

    // Create the certificate Image
    const certificate_image = document.createElement('img')
    // append certificate_image in certificate_image_frame
    certificate_image_frame.appendChild(certificate_image)

    //style certificate_image
    certificate_image.className = "w-full h-full"
    //insert image in certificate_image
    certificate_image.src = certificate_img


    //create certificate_info_div
    const certificate_info_div = document.createElement('div')
    // append certificate_info_div to certificate_inner_container
    certificate_inner_container.appendChild(certificate_info_div)
    // Style certificate_info_div
    certificate_info_div.className = "flex flex-col my-3 gap-2 ml-3 gray_color text-sm"

    // Get the name of the document from the path
    let name_array = certificate_img.split("/")
    let name_of_institution = name_array[name_array.length - 2]
    let name_of_certificate = name_array[name_array.length - 1]

    //create company_name_div
    const company_name_div = document.createElement('div')
    company_name_div.innerHTML = `<div class="flex gap-1">
        <p class="font-semibold">Certificate Name:</p>
        <p>${certificate_name}</p>
    </div>`
    //create institution_div
    const institution_div = document.createElement('div')
    institution_div.innerHTML = `<div class="flex gap-1">
        <p class="font-semibold">Issuing Institution:</p>
        <p>${issuing_institution}</p>
    </div>`
    //create date_of_issue_div
    const date_of_issue_div = document.createElement('div')
    date_of_issue_div.innerHTML = `<div class="flex gap-1">
        <p class="font-semibold">Date of Issue:</p>
        <p>${date_of_issue}</p>
    </div>`
    //create skills_acquired_div
    const skills_acquired_div = document.createElement('div')
    skills_acquired_div.innerHTML = `<div class="flex gap-1">
        <p class="font-semibold w-fit">Skills:</p>
        <p>${skills_acquired}</p>
    </div>`
    //create download_certificate_div 
    const download_certificate_div = document.createElement('div')
    download_certificate_div.innerHTML = `<div class="flex gap-1 mt-3">
            <a href="/download_certificate/${name_of_institution}/${name_of_certificate}" download class="p-3 rounded-lg nav_bar_bg btn_hover transition-all duration-700" style='font-family: "Playfair Display SC", serif;'>Download Certificate</a>
    </div>`

    // Array of the certificate info children
    const certificate_info_array = [company_name_div, institution_div, date_of_issue_div, skills_acquired_div, download_certificate_div]
    // Use loop to append those certificate info children to certificate_info_div
    for (let i = 0; i < certificate_info_array.length; i++){
        certificate_info_div.append(certificate_info_array[i])
    }

}

// Declare the Certificate Div
const alx_certificate_div = document.getElementById('alx_certificate_div')
const coursera_certificate_div = document.getElementById('coursera_certificate_div')
const linkedin_certificate_div = document.getElementById('linkedin_certificate_div')
const threeMTT_certificate_div = document.getElementById('threeMTT_certificate_div')
const programming_hub_certificate_div = document.getElementById('programming_hub_certificate_div')
const mckinsey_certificate_div = document.getElementById('mckinsey_certificate_div')

const div_dict = {
    'alx_certificate_div':alx_certificate_div,
    'coursera_certificate_div': coursera_certificate_div,
    'linkedin_certificate_div': linkedin_certificate_div,
    'threeMTT_certificate_div': threeMTT_certificate_div,
    'programming_hub_certificate_div': programming_hub_certificate_div,
    'mckinsey_certificate_div': mckinsey_certificate_div
}

// Create The array dictionary
const jinja_div = document.getElementById('jinja_div')
certificate_array_dict = JSON.parse(jinja_div.dataset.certificate_array_dict)
console.log(certificate_array_dict)

for (let i = 0; i < certificate_array_dict.length; i++){
    certificate(
        div_dict[certificate_array_dict[i]['certificates_container']],
        certificate_array_dict[i]['certificate_height'],
        certificate_array_dict[i]['certificate_img'], 
        certificate_array_dict[i]['certificate_name'], 
        certificate_array_dict[i]['issuing_institution'], 
        certificate_array_dict[i]['date_of_issue'], 
        certificate_array_dict[i]['skills_acquired']
        );
}
                    