import * as childProcess from 'child_process';

interface Options {
  textToEcho: string;
}

export default async function (_options: Options): Promise<{ success: boolean }> {
  console.log(`Executing "echo"...`);
  console.log(`Options: ${JSON.stringify(_options, null, 2)}`);

  const child = childProcess.spawn('echo', [_options.textToEcho]);

  return new Promise<{ success: boolean }>((res) => {
    child.stdout.on('data', (data) => {
      console.log(data.toString());
    });

    child.stderr.on('data', (data) => {
      console.log(data.toString());
    });

    child.on('close', (code) => {
      console.log(`Done.`)
      res({ success: code === 0 });
    });
  });
}
