import { BuilderOutput, createBuilder } from '@angular-devkit/architect';
import * as childProcess from 'child_process';
import { Observable } from 'rxjs';
import { json } from '@angular-devkit/core';

interface Options extends json.JsonObject {
  textToEcho: string;
}

export default createBuilder((_options: Options, context) => {
  context.logger.info(`Executing "echo"...`);
  context.logger.info(`Options: ${JSON.stringify(_options, null, 2)}`);
  console.log(context);

  const child = childProcess.spawn('echo', [_options.textToEcho]);

  return new Observable<BuilderOutput>((observer) => {
    child.stdout.on('data', (data) => {
      context.logger.info(data.toString());
    });

    child.stderr.on('data', (data) => {
      context.logger.error(data.toString());
    });

    child.on('close', (code) => {
      context.logger.info(`Done.`);
      observer.next({ success: code === 0 });
      observer.complete();
    });
  });
});
