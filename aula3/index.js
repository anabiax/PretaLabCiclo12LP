const idade = 17;
const roupaFormal = true;
const temConviteVIP = true;

const podeEntrar = idade > 18 && (roupaFormal || temConviteVIP);
console.log(`Pode entrar na festa: ${podeEntrar}`);