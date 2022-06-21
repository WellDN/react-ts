type TweetProps = {
    text: string;
}

export function Tweet(props: TweetProps) {
    return (
        <p>{props.text}</p>
    );
}

//TweetProps é um text: string; export function Tweet vai estar exportando a Função dada ao Tweet que é o TweetProps ou seja: TweetProps tem o valor text: string; 
//resultado: o Tweet é uma caixa de texto que será colocado qualquer resultado e estará retornando no TweetProps. que é um nomeado como um Text: string;.
//a ultima função pega o text do TweetProps e da uma função a ela usando props (props.text).