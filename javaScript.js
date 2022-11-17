         // 1-2 ЗАДАНИИ..

         let man = {
            name:'Askhab',
            family:'Khizriev',
            age:23,
            growth:185,
            weight:77,
            login:'sdf;l;als',
            password:'wqrqr',
            money:3000,
           
            getIMT:function(){return (this.weight / Math.pow(this.growth))}
           
           
           };
           
           
           
           
            man.address = {
             citi: 'grozny',
              street:'Djahar Dudaeva',
              house: 777,
            };
           
           console.log(man.address)
           
           
                                    // 3 ЗАДАНИИ..
           
           
            let input = 'wqrqr';
           
            if ( man.password === input ) {
                console.log(`Добро пожаловать ${man.name} ${man.family} Ваш логин ${man.login}`);
               
            
            } else {
              console.log(`Указанный пароль ${input} не верен.Попробуйте еще раз`);
            }
             
                     // 4 задание 
           
           
           
            
           
           
           man.getIMT=function(){ 
             return( this.weight/3.42);}
           
           
    console.log(man.getIMT())
            
              
           
           getIMT.imtResult=function(){
            if( getIMT < 18)
            return `Недостаточный  вес`
           if ( getIMT < 18 && getIMT < 25)
             return `вес в норме `
           if( getIMT < 25 && getIMT > 29)
             return`избытачный вес`
            if( getIMT > 29)
            return `ожирение `
           }
           console.log(getIMT.imtResult());