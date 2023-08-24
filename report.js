class Report
{

    constructor(btnGuest, btnAdmin, check, seeReport)
    {

        this.btnGuest = btnGuest;

        this.btnAdmin = btnAdmin;

        this.check = check;

        this.seeReport = seeReport;

        this.checkAdmin = false;

    }

    setGuest()
    {

        this.btnGuest.addEventListener('click', ()=>
        {

            this.check.textContent = 'you are logged in as: ' + this.btnGuest.value;

            this.checkAdmin = false;

        })

    }

    setAdmin()
    {

        this.btnAdmin.addEventListener('click', ()=>
        {

            this.check.textContent = 'you are logged in as: ' + this.btnAdmin.value;
            
            this.checkAdmin = true;

        })

    }

    checkReport()
    {

        this.setGuest();

        this.setAdmin();

        this.seeReport.addEventListener('click', ()=>
        {

            if(this.checkAdmin === false)
            {    

                location.href="403.html";

            }
            else
            {

                location.href="report.html";

            }

        })

    }

}

new Report
(

    document.getElementsByTagName('button')[0],

    document.getElementsByTagName('button')[1],
    
    document.getElementsByTagName('p')[0],

    document.getElementById('seeReport'),

).checkReport();