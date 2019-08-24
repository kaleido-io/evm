import EVM from '../classes/evm.class';
import Opcode from '../interfaces/opcode.interface';
import * as BigNumber from 'big-integer';

export default (opcode: Opcode, state: EVM): void => {
    state.stack.push(BigNumber(opcode.pc));
};
