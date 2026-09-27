"use client";
import { useState } from "react";
import { Shell, PrimaryButton } from "../components/Shell";
import { Icon } from "../components/Icon";

type Lead={
  initials:string;name:string;business:string;subject:string;source:string;
  contactMode:"Online"|"Phone";status:"New"|"Read"|"Responded"|"Quoted";
  serviceType:string;tag?:string;time:string;email:string;phone:string;message:string
};

const leads:Lead[]=[
  {initials:"JR",name:"Justin Revell",business:"Auto Opulence (Incoming)",subject:"Vehicle Washing Inquiry Details Needed",source:"Web Forms",contactMode:"Online",status:"New",serviceType:"Vehicle Washing",tag:"Vehicle Based Cold Wash",time:"4h",email:"justin@broadlanddigital.co.uk",phone:"7876221257",message:"Hi,\n\nI’m looking for more information about your vehicle washing services. Could you please send over the available packages and pricing?\n\nThanks,\nJustin"},
  {initials:"AD",name:"Antonio Domingo",business:"Race Car Graphics Leads (Incoming)",subject:"Custom Race Livery Quote",source:"Instagram",contactMode:"Online",status:"Read",serviceType:"Custom Race Livery",time:"5h",email:"antonio@example.com",phone:"07700 900222",message:"Please can you quote for a custom race livery and sponsor graphics."},
  {initials:"SM",name:"Sarah Mitchell",business:"Private Customer (Incoming)",subject:"Ceramic Coating Enquiry",source:"Facebook",contactMode:"Online",status:"Responded",serviceType:"Ceramic Coating",time:"1d",email:"sarah@example.com",phone:"07700 900333",message:"I would like pricing for ceramic coating on a new vehicle."},
  {initials:"MT",name:"Mark Thompson",business:"Trade Enquiry (Incoming)",subject:"Van Graphics for Fleet",source:"Phone",contactMode:"Phone",status:"Quoted",serviceType:"Van Graphics",time:"1d",email:"mark@example.com",phone:"07700 900444",message:"We need graphics across a fleet of 6 vans."}
];

export default function LeadsClient(){
  const [selected,setSelected]=useState(0);
  const lead=leads[selected];

  return <Shell active="leads" action={<PrimaryButton>New Lead</PrimaryButton>}>
    <div className="leadWorkspace">
      <section className="leadColumnList">
        <div className="leadListHead"><h1>Leads</h1><p>Manage enquiries from all channels</p></div>
        <div className="filterChips">
          <button className="active">All <b>11</b></button><button>New <b>3</b></button>
          <button>Read <b>2</b></button><button>Responded <b>4</b></button>
          <button>Online <b>8</b></button><button>Phone <b>3</b></button>
        </div>
        <div className="sortRow">
          <button>Sort by: Latest reply first⌄</button>
          <div><button className="iconButton small"><Icon name="calendar"/></button><button className="iconButton small"><Icon name="tag"/></button></div>
        </div>
        <div className="leadCards">
          {leads.map((l,i)=><button className={i===selected?"leadListCard selected":"leadListCard"} onClick={()=>setSelected(i)} key={l.name}>
            <span className={`avatar ${i===0?"red":i===1?"green":i===2?"pink":"blue"}`}>{l.initials}</span>
            <div className="leadListBody">
              <div className="leadCardTop">
                <div className="leadCardIdentity"><strong>{l.name}</strong><span>{l.business}</span></div>
                <div className="leadArrival"><strong>{l.time}</strong><span className={"statusBadge status-"+l.status.toLowerCase()}>{l.status}</span></div>
              </div>
              <h3>{l.subject}</h3>
              <div className="leadMetaRow">
                <span className="contactRoute"><Icon name={l.contactMode==="Phone"?"phone":"online"} size={15}/><span>{l.contactMode}</span></span>
                {l.tag&&<em className="softTag">{l.tag}</em>}
              </div>
              <div className="serviceEnquiryType"><span>Service enquiry</span><strong>{l.serviceType}</strong></div>
            </div>
          </button>)}
        </div>
      </section>

      <section className="leadDetail">
        <header className="leadDetailTop">
          <div className="identity"><span className="avatar red large">{lead.initials}</span>
            <div><h1>{lead.name}</h1><p>{lead.business}</p>
              <div className="leadMetaRow">
                <span className="contactRoute"><Icon name={lead.contactMode==="Phone"?"phone":"online"} size={15}/><span>{lead.contactMode}</span></span>
                <span className={"statusBadge status-"+lead.status.toLowerCase()}>{lead.status}</span>
                <em className="softTag">Broadland Digital</em>{lead.tag&&<em className="softTag">{lead.tag}</em>}
              </div>
            </div>
          </div>
          <div className="detailActions"><button>✓ Mark as Closed</button><button>▣ Move To</button><button>◉ Unassigned⌄</button><button>⋮</button></div>
        </header>

        <nav className="detailTabs"><button className="active">Details</button><button>Messages <b>3</b></button><button>Tasks <b>0</b></button><button>Notes <b>0</b></button><button>Activity</button></nav>

        <div className="detailGrid">
          <section className="detailCard">
            <h2>Contact Information</h2>
            <div className="formGrid two">
              <Field label="First Name" value={lead.name.split(" ")[0]}/>
              <Field label="Last Name" value={lead.name.split(" ").slice(1).join(" ")}/>
              <Field label="Email Address" value={lead.email} wide/>
              <Field label="Phone Number" value={lead.phone} wide/>
              <Field label="Company" value="Auto Opulence" wide/>
              <SelectField label="Enquiry Type" value="Vehicle Washing"/>
              <SelectField label="Source" value={lead.source}/>
            </div>
          </section>

          <section className="detailCard enquiry">
            <h2>Enquiry Details</h2>
            <Field label="Subject" value={lead.subject} wide/>
            <label className="field wide"><span>Message</span><textarea defaultValue={lead.message}/></label>
            <div className="field"><span>Tags</span><div className="tagRow"><em className="softTag">Broadland Digital</em>{lead.tag&&<em className="softTag">{lead.tag}</em>}<button className="addTag">+ Add Tag</button></div></div>
          </section>
        </div>

        <div className="detailBottom">
          <button className="saveButton">Save Changes</button>
          <div className="quickActions">
            <button className="reply"><Icon name="reply"/>Reply</button>
            <button><Icon name="note"/>Add Note</button>
            <button><Icon name="tasks"/>Create Task</button>
            <button><Icon name="phone"/>Log Call</button>
            <button><Icon name="trash"/>Bin It</button>
          </div>
        </div>
      </section>
    </div>
  </Shell>
}

function Field({label,value,wide=false}:{label:string;value:string;wide?:boolean}){
  return <label className={wide?"field wide":"field"}><span>{label}</span><input defaultValue={value}/></label>
}
function SelectField({label,value}:{label:string;value:string}){
  return <label className="field"><span>{label}</span><select defaultValue={value}><option>{value}</option></select></label>
}
