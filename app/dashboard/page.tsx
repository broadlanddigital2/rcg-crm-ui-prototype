import { Shell, PrimaryButton } from "../components/Shell";
import { Icon, type IconName } from "../components/Icon";

type DashboardLead = {
  initials:string; name:string; business:string; subject:string;
  contactMode:"Online"|"Phone"; status:"New"|"Read"|"Responded"|"Quoted";
  serviceType:string; tag?:string; time:string;
};

const leads: DashboardLead[] = [
  {initials:"JR",name:"Justin Revell",business:"Auto Opulence (Incoming)",subject:"Vehicle Washing Inquiry Details Needed",contactMode:"Online",status:"New",serviceType:"Vehicle Washing",time:"4h"},
  {initials:"AD",name:"Antonio Domingo",business:"Race Car Graphics Leads (Incoming)",subject:"Custom Race Livery Quote",contactMode:"Online",status:"Read",serviceType:"Custom Race Livery",time:"5h"},
  {initials:"SM",name:"Sarah Mitchell",business:"Private Customer (Incoming)",subject:"Ceramic Coating Enquiry",contactMode:"Online",status:"Responded",serviceType:"Ceramic Coating",time:"1d"},
  {initials:"MT",name:"Mark Thompson",business:"Trade Enquiry (Incoming)",subject:"Van Graphics for Fleet",contactMode:"Phone",status:"Quoted",serviceType:"Van Graphics",time:"1d"},
  {initials:"EC",name:"Emma Clarke",business:"Race Car Graphics Leads (Incoming)",subject:"Car Wrap Enquiry",contactMode:"Online",status:"New",serviceType:"Car Wrap",time:"1d"}
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
            <div className="dashboardLeadTop">
              <div><strong>{l.name}</strong><span className="dashboardLeadBusiness">{l.business}</span></div>
              <div className="leadArrival"><strong>{l.time}</strong><span className={"statusBadge status-"+l.status.toLowerCase()}>{l.status}</span></div>
            </div>
            <h3>{l.subject}</h3>
            <div className="leadMetaRow">
              <span className="contactRoute"><Icon name={l.contactMode==="Phone"?"phone":"online"} size={15}/><span>{l.contactMode}</span></span>
              {l.tag&&<em className="softTag">{l.tag}</em>}
            </div>
            <div className="serviceEnquiryType"><span>Service enquiry</span><strong>{l.serviceType}</strong></div>
          </div>
        </div>)}
      </div>
    </section>
    <section className="panel"><PanelHead title="Upcoming Tasks"/><div className="taskList">{tasks.map((t,i)=><div className="taskRow" key={t[0]}><span className="taskCheck"/><strong>{t[0]}</strong><small className={i<2?"urgent":""}>{t[1]}</small></div>)}</div><div className="channelBlock"><PanelHead title="Channel Activity" suffix="Last 7 days"/><div className="channels"><Channel icon="mail" label="Web Forms" count={5}/><Channel icon="messages" label="Instagram" count={2}/><Channel icon="messages" label="Facebook" count={1}/><Channel icon="mail" label="Email" count={2}/><Channel icon="phone" label="Phone" count={3}/></div></div></section>
  </div>
</div></Shell>}

function Stat({icon,value,label,tone}:{icon:IconName;value:string;label:string;tone:string}){return <div className="statCard"><span className={`statIcon ${tone}`}><Icon name={icon}/></span><div><strong>{value}</strong><span>{label}</span></div></div>}
function PanelHead({title,suffix="View all"}:{title:string;suffix?:string}){return <div className="panelHead"><h2>{title}</h2><button>{suffix}</button></div>}
function Channel({icon,label,count}:{icon:IconName;label:string;count:number}){return <div className="channelItem"><span className="channelIcon"><Icon name={icon}/><b>{count}</b></span><small>{label}</small></div>}
