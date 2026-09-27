import { Shell, PrimaryButton } from "../components/Shell";
import { Icon, type IconName } from "../components/Icon";

const leads = [
  {initials:"JR",name:"Justin Revell",business:"Auto Opulence (Incoming)",subject:"Vehicle Washing Inquiry Details Needed",contactMode:"Online",status:"New",tag:"Vehicle Based Cold Wash",time:"4h"},
  {initials:"AD",name:"Antonio Domingo",business:"Race Car Graphics Leads (Incoming)",subject:"Custom Race Livery Quote",contactMode:"Online",status:"Read",time:"5h"},
  {initials:"SM",name:"Sarah Mitchell",business:"Private Customer (Incoming)",subject:"Ceramic Coating Enquiry",contactMode:"Online",status:"Responded",time:"1d"},
  {initials:"MT",name:"Mark Thompson",business:"Trade Enquiry (Incoming)",subject:"Van Graphics for Fleet",contactMode:"Phone",status:"Quoted",time:"1d"},
  {initials:"EC",name:"Emma Clarke",business:"Race Car Graphics Leads (Incoming)",subject:"Car Wrap Enquiry",contactMode:"Online",status:"New",time:"1d"}
];
const tasks = [["Follow up Auto Opulence enquiry","Today 10:00"],["Send quote to Antonio","Today 14:00"],["Call Sarah re ceramic coating","Tomorrow 08:00"],["Prepare artwork for Thompson","Tomorrow 11:00"]];

export default function Dashboard(){return <Shell active="home" action={<PrimaryButton>New Lead</PrimaryButton>}><div className="page dashboardPage">
  <div className="pageHeading"><div><h1>Good morning, Justin</h1><p>Here&apos;s what&apos;s happening with your business today.</p></div><span>Saturday 27 September 2026</span></div>
  <div className="statGrid"><Stat icon="leads" value="11" label="Open Leads" tone="red"/><Stat icon="tasks" value="3" label="Tasks Due" tone="blue"/><Stat icon="customers" value="24" label="Customers" tone="green"/><Stat icon="suppliers" value="6" label="Suppliers" tone="purple"/></div>
  <div className="dashboardGrid">
    <section className="panel recentLeadsPanel"><PanelHead title="Recent Leads"/>
      <div className="dashboardLeadList">
        {leads.map((l,i)=><div className="dashboardLeadCard" key={l.name}>
          <span className={`avatar ${i===0?"red":i===1?"green":i===2?"pink":i===3?"blue":"purple"}`}>{l.initials}</span>
          <div className="dashboardLeadBody">
            <div className="dashboardLeadTop"><strong>{l.name}</strong><small>{l.time}</small></div>
            <span className="dashboardLeadBusiness">{l.business}</span>
            <h3>{l.subject}</h3>
            <div className="leadMetaRow">
              <span className="contactRoute"><Icon name={l.contactMode==="Phone"?"phone":"online"} size={15}/><span>{l.contactMode}</span></span>
              <span className={"statusBadge status-"+l.status.toLowerCase()}>{l.status}</span>
              {l.tag&&<em className="softTag">{l.tag}</em>}
            </div>
          </div>
        </div>)}
      </div>
    </section>
    <section className="panel"><PanelHead title="Upcoming Tasks"/><div className="taskList">{tasks.map((t,i)=><div className="taskRow" key={t[0]}><span className="taskCheck"/><strong>{t[0]}</strong><small className={i<2?"urgent":""}>{t[1]}</small></div>)}</div><div className="channelBlock"><PanelHead title="Channel Activity" suffix="Last 7 days"/><div className="channels"><Channel icon="mail" label="Webform"/><Channel icon="messages" label="Instagram"/><Channel icon="messages" label="Facebook"/><Channel icon="mail" label="Email"/><Channel icon="phone" label="Phone"/></div></div></section>
  </div>
</div></Shell>}

function Stat({icon,value,label,tone}:{icon:IconName;value:string;label:string;tone:string}){return <div className="statCard"><span className={`statIcon ${tone}`}><Icon name={icon}/></span><div><strong>{value}</strong><span>{label}</span></div></div>}
function PanelHead({title,suffix="View all"}:{title:string;suffix?:string}){return <div className="panelHead"><h2>{title}</h2><button>{suffix}</button></div>}
function Channel({icon,label}:{icon:IconName;label:string}){return <div className="channelItem"><span><Icon name={icon}/></span><small>{label}</small></div>}
