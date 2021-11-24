import swal from 'sweetalert2';

function validateCreate(user, confirmasenha) {

    let cortaTel = user.phone.split(' ');

    if(user.name === '' || user.email === '' || user.phone === '' || user.companyName === '' || user.password === '' || user.confirmasenha === ''){
        return swal.fire('Preencha todos os campos', '', 'error');
    } else if(user.password.length < 6){
        return swal.fire('Sua senha é muito pequena', '', 'error');
    } else if(user.password.match(/[a-z]/) === null) {
        return swal.fire('Preencha a sua senha corretamente, insira ao menos uma letra minúscula', '', 'error');
    } else if(user.password.match(/[A-Z]/) === null){
        return swal.fire('Preencha a sua senha corretamente, insira ao menos uma letra maiúscula', '', 'error');
    } else if(user.password.match(/[0-9]/) === null){
        return swal.fire('Preencha a sua senha corretamente, insira ao menos um número', '', 'error');
    } else if(!user.email.includes('@') && !user.email.includes('.')){
        return swal.fire('Preencha o seu email corretamente', '', 'error');
    } else if(cortaTel.length !== 3){
        return swal.fire('Preencha seu telefone corretamente', '', 'error');
    } else if(user.password !== confirmasenha){
        return swal.fire('Suas senhas não são as mesmas', '', 'error'); 
    } else if(user.tokenRecaptcha === 0){
        return swal.fire('Você precisa verificar o campo de não sou um robo', '', 'error');
    } else {
        return 'success';
    }
}

export default validateCreate;