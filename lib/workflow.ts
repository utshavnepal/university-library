import {Client as WorkflowClient} from '@upstash/workflow'
import config from './config'


export const workflowClient = new WorkflowClient({
    baseUrl:config.env.upstash.qstashUrl,
    token:config.env.upstash.qstashToken,
    
})

import { Client as QStashClient, resend } from "@upstash/qstash";
const qStachClient = new QStashClient({ token: config.env.upstash.qstashToken });

export const sendEmail = async({email, subject, message}:{email:string, subject:string, message:string})=>{


    

    await qStachClient.publishJSON({
  api: {
    name: "email",
    provider: resend({ token: config.env.resendToken }),
  },
  body: {
    from: "Bosontech <hello.bosontech.online>",
    to: [email],
    subject: subject,
    html: message,
  },
});
}

