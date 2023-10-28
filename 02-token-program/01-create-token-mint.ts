import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"))

const publickey = new Web3.PublicKey("BoXCF4o9z3aQu1rdEro11VTt3MWAtWwWMBvFr6Qz4UCV")
const decoded = base58.decode('477pA9zGM5NwjU3CxLAjpiVkUKb1Qf4DnYJWkqYasUT9MSere8SGk9thypzTL4AmoD4yJYXKapRf3DZP49ao4iL5')
const keyPair = Web3.Keypair.fromSecretKey(decoded)

async function main(){
    const tokenMint = await token.createMint(
        connection,
        keyPair,
        publickey, // mint auth
        publickey, // freeze atuh
        9 //decimals
    )
    console.log(tokenMint.toBase58());
}

main();