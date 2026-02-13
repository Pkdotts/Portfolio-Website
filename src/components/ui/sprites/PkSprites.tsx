import NextImage from 'next/image';
import { Image }  from "@mantine/core";
import pkFront from "../../../../public/PkFront.gif"

export function PkSpriteFront(){
    return (
        <Image component={NextImage} className='pixel-img' src={pkFront} alt='A two frame gif of a walking anthropomorphic white silhouette of a coyote' fit="contain"/>
    );
}