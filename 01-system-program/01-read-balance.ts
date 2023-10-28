import * as Web3 from '@solana/web3.js';


async function main() {
    const publicKey = new Web3.PublicKey('BoXCF4o9z3aQu1rdEro11VTt3MWAtWwWMBvFr6Qz4UCV');
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'));
    const balance = await connection.getBalance(publicKey);
    console.log('balance', balance);


}

main();
