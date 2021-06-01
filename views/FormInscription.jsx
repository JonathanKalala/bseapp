import React, { useState, useEffect } from 'react';
import { Container, Header, Content, Form, Item, Input } from 'native-base';
import { View } from 'react-native';
import StepOne from '../components/StepOne'
import StepTwo from '../components/StepTwo'
import Axios from 'axios'


const FormInscription = () =>{
    const [step, setStep] = useState(1)
    const [nom, setNom] = useState(1)
    const [prenom, setPrenom] = useState(1)
    const [ecole, setEcole] = useState(1)
    const [matricule, setMatricule] = useState(1)
    const [province, setProvince] = useState(1)
    const [classe, setClasse] = useState(1)
    const [lieuDeNaissance, setlieuDeNaissance] = useState(1)
    const [sexe, setSexe] = useState(1)
    const [dateDeNaissance, setDateDeDeNaissance] = useState(new Date(2018, 12, 31))
    const nextStep = () =>{
        setStep(2)
        // const { step } = this.state;
        // this.setState({step: step+1})
      };

      const prevStep = () => {
        setStep(1)
        // const { step } = this.state;
        // this.setState({step: step -1});
      }

      const handleChangeNom = (e)=>{
          console.log(e);
          
          setNom(e)
      }
      const handleChangePrenom = (e)=>{
        console.log(e);
        setPrenom(e)
    }

    const handleChangeEcole = (e)=>{
        setEcole(e)
    }
    const handleChangeMatricule = (e)=>{
        setMatricule(e)
    }
    const handleChangeProvince = (e)=>{
        setProvince(e)
    }
    const handleChangeClasse = (e)=>{
        setClasse(e)
    }
    const handleChangeLieu = (e)=>{
        setlieuDeNaissance(e)
    }
    const handleChangeSexe = (e)=>{
        setSexe(e)
    }
    const handleChangeDate = (e)=>{
        console.log(e);
        setDateDeDeNaissance(e)
    }

    
    const Submit = ()=>{
        const Joueur={
            nom:nom,
            postnom:prenom,
            province: province,
            ecole: ecole,
            classe: classe,
            matricule: matricule,
            sexe: sexe,
            lieunaissance: lieuDeNaissance,
            datenaissance: dateDeNaissance
        }

        console.log(Joueur);

        Axios.post('https://api-jeu-bourse.herokuapp.com/api/joueur', Joueur)
            .then(res=>{
                console.log("Joueur Enregistré");
            })
            .catch(err=>{
                console.log("Echec de l'enregistrement");
                
            })
        
    }

    
    switch(step){
        case 1:
            return(
                <View>
                    <StepOne nextStep={nextStep}
                    handleChangeNom={handleChangeNom}
                    handleChangePrenom={handleChangePrenom}
                    handleChangeEcole={handleChangeEcole}
                    handleChangeMatricule={handleChangeMatricule}
                    handleChangeProvince={handleChangeProvince}
                    />
                </View>
            );
        case 2:
            return(
                <View>
                    <StepTwo prevStep={prevStep} Submit={Submit}
                    handleChangeLieu={handleChangeLieu}
                    handleChangeDate={handleChangeDate}
                    handleChangeClasse={handleChangeClasse}
                    handleChangeSexe={handleChangeSexe}
                    dateDeNaissance={dateDeNaissance}
                    />
                </View>
            );
            
    }
    
}

export default FormInscription