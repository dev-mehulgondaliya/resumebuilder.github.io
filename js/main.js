$(document).ready(function(){
    $('#skilladdbtn').click(function(){
        $('#allskill').append(`<div class="mb-3">
        <input type="text" class="form-control skill" placeholder="Add Skill">
        </div>`);
    });

    $('#eduactionaddbtn').click(function(){
        $('#educationdetails').append(`<div class="mb-3">
        <input type="text" class="form-control degreename" placeholder="Degree Name">
        </div>
        <div class="mb-3">
            <input type="text" class="form-control universityname" placeholder="University Name">
        </div>
        <div class="mb-3">
            <input type="text" class="form-control passingyear" placeholder="Passing Year">
        </div>`);
    });

    $('#langaddbtn').click(function(){
        $('#languages').append(`<div class="mb-3">
        <input type="text" class="form-control languagename" placeholder="Language Name">
        </div>`);
    });

    $('#workaddbtn').click(function(){
        $('#workexperience').append(`<div class="mb-3">
        <input type="text" class="form-control companyname" placeholder="Company Name">
        </div>
        <div class="mb-3">
            <textarea class="form-control work" rows="10"></textarea>
        </div>`);
    });

    $('#projectaddbtn').click(function(){
        $('#allproject').append(`<div class="mb-3">
        <input type="text" class="form-control projectname" placeholder="Project Name">
        </div>
        <div class="mb-3">
            <textarea class="form-control projectdetails" rows="10"></textarea>
        </div>`);
    });


    // user data retrive from form
    function getData(){
        let obj = {
            fullname : $('#fname').val(),
            conatct : $('#contact').val(),
            email : $('#email').val(),
            github : $('#github').val(),
            linkedin : $('#linkedin').val(),
            address : $('#address').val(),
            allskill : $('.skill'),
            degreename: $('.degreename'),
            universityname: $('.universityname'),
            passingyear: $('.passingyear'),
            languages: $('.languagename'),
            profession : $('#profession').val(),
            profile : $('#profile').val(),
            companyname : $('.companyname'),
            work : $('.work'),
            projectname : $('.projectname'),
            projectdetails : $('.projectdetails'),
        }
        return obj;
    }

    // handle generate resume button
    $('#generatebtn').click(function(e){
        e.preventDefault();
        showData(getData());
        $('#detailsinput').hide();
        $('#showoutput').show();
    });

    function showData(result){
        $('#resumetitle').html(`${result.fullname}`);
        $('#resumeprofession').html(`${result.profession}`);
        $('#resumecontact').html(`${result.conatct}`);
        $('#resumeemail').html(`${result.email}`);
        $('#resumegithub').html(`${result.github}`);
        $('#resumelinkedin').html(`${result.linkedin}`);
        $('#resumeaddress').html(`${result.address}`);
        $('#resumeprofile').html(`${result.profile}`);
        result.allskill.each(function(e){
            $('#resumeskill').append(`<li>${result.allskill[e].value}</li>`);
        });
        result.languages.each(function(e){
            $('#resumelanguage').append(`<li>${result.languages[e].value}</li>`);
        });
        result.degreename.each(function(e){
            $('#resumeeducation').append(`
            <h6>Course Name : <span class="resumedegreename"></span></h6>
            <p>University Name : <span class="resumeuniversityname"></span></p>
            <p>Passing Year : <span class="resumepassingyear"></span></p>`);
            $('.resumedegreename')[e].textContent = result.degreename[e].value;
        });
        result.universityname.each(function(e){
            $('.resumeuniversityname')[e].textContent = result.universityname[e].value;
        });
        result.passingyear.each(function(e){
            $('.resumepassingyear')[e].textContent = result.passingyear[e].value;
        });
        result.companyname.each(function(e){
            $('#resumecompany').append(`<h6 class="resumecomapanyname"></h6>
            <p class="resumecomapanydetails"></p>`);
            $('.resumecomapanyname')[e].textContent = result.companyname[e].value;
        });
        result.work.each(function(e){
            $('.resumecomapanydetails')[e].textContent = result.work[e].value;
        });
        result.projectname.each(function(e){
            $('#resumeprojects').append(`<h6 class="resumeprojecttitle"></h6>
            <p class="resumeprojectdetails"></p>`);
            $('.resumeprojecttitle')[e].textContent = result.projectname[e].value;
        });
        result.projectdetails.each(function(e){
            $('.resumeprojectdetails')[e].textContent = result.projectdetails[e].value;
        });
    }

    // handle print resume
    document.getElementById('printbtn').addEventListener('click', function () {
        var printableContent = document.querySelector('.showresume').innerHTML;
        var originalContent = document.body.innerHTML;
        document.body.innerHTML = printableContent;
        window.print();
        document.body.innerHTML = originalContent;
       
    });


});
