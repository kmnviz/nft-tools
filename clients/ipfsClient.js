'use strict';

import fs from 'fs';
import { create } from 'ipfs-http-client';

export default class IpfsClient {

    constructor(url) {
        this.client = create(new URL(url));
    }

    async addFile(filePath) {
        const buffer = fs.readFileSync(filePath);
        return await this.client.add(buffer);
    }
}
