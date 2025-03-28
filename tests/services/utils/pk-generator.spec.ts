
import { expect } from 'chai';
import { generatePK, PkEntityType } from '../../../services/utils/pk-generator';
import exp from 'constants';

describe('PKGenerator', () => {
    it('should generate a random string', () => {
        const pk = generatePK(PkEntityType.USER);
        console.log('pk:', pk);
        expect(pk).not.null;
        expect(pk).to.contain(PkEntityType.USER);
    });

    it('should generate a Primary key for Entity Product', () => {
        const pk = generatePK(PkEntityType.PRODUCT);
        console.log('pk:', pk);
        expect(pk).not.null;
        expect(pk).to.contain(PkEntityType.PRODUCT);
    });
});

