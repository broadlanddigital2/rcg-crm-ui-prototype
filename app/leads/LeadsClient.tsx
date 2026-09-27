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
  {initials:"JR",name:"Justin Revell",business:"Auto Opulence (Incoming)",subject:"Vehicle Washing Inquiry Details Needed",source:"Web Forms",contactMode:"Online",status:"New",serviceType:"Vehicle Washing",time:"4h",email:"justin@broadlanddigital.co.uk",phone:"7876221257",message:"Hi,\n\nI’m looking for more information about your vehicle washing services. Could you please send over the available packages and pricing?\n\nThanks,\nJustin"},
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
          <div className="detailActions">
            <button>✓ Mark as Closed</button>
            <ActionDropdown label="▣ Move To" options={["Incoming","Quoted","On Proof","Completed"]}/>
            <ActionDropdown label="◉ Unassigned" options={["Unassigned","Justin Revell","Chris","Design Team"]}/>
            <button className="moreAction">⋮</button>
          </div>
        </header>

        <nav className="detailTabs"><button className="active">Details</button><button>Messages <b>3</b></button><button>Tasks <b>0</b></button><button>Notes <b>0</b></button><button>Activity</button></nav>

        <div className="leadDetailSplit">
          <section className="contactHalf">
            <div className="sectionTitleRow">
              <div><span>CONTACT</span><h2>Contact Information</h2></div>
              <button className="secondaryButton">Edit contact</button>
            </div>
            <div className="contactOverview">
              <div className="formGrid two">
                <Field label="First Name" value={lead.name.split(" ")[0]}/>
                <Field label="Last Name" value={lead.name.split(" ").slice(1).join(" ")}/>
                <Field label="Email Address" value={lead.email}/>
                <Field label="Phone Number" value={lead.phone}/>
                <Field label="Company" value="Auto Opulence"/>
                <SelectField label="Enquiry Type" value={lead.serviceType} options={["Vehicle Washing","Vehicle Valeting","Ceramic Coating","Custom Race Livery","Van Graphics","Car Wrap"]}/>
                <SelectField label="Source" value={lead.source} options={["Web Forms","Enquiry Bot","Facebook","Instagram","WhatsApp","Phone"]}/>
                <div className="field"><span>Status</span><div className="statusField"><span className={"statusBadge status-"+lead.status.toLowerCase()}>{lead.status}</span></div></div>
              </div>
              <div className="contactContext">
                <span className="contextLabel">Latest enquiry</span>
                <strong>{lead.subject}</strong>
                <p>{lead.message}</p>
                <div className="tagRow"><span className="contactRoute"><Icon name={lead.contactMode==="Phone"?"phone":"online"} size={15}/><span>{lead.contactMode}</span></span>{lead.tag&&<em className="softTag">{lead.tag}</em>}</div>
              </div>
            </div>
          </section>

          <section className="responseHalf">
            <div className="responseHeader">
              <div><span>RESPONSE</span><h2>Reply to {lead.name}</h2></div>
              <span className="responseFrom">From: Race Car Graphics</span>
            </div>
            <div className="responseMeta">
              <div><span>To</span><strong>{lead.email}</strong></div>
              <div><span>Subject</span><input defaultValue={"Re: "+lead.subject}/></div>
            </div>
            <textarea className="responseTextarea" placeholder="Write your response here…"/>
            <div className="responseFooter">
              <div className="quickActions">
                <button><Icon name="note"/>Add Note</button>
                <button><Icon name="tasks"/>Create Task</button>
                <button><Icon name="phone"/>Log Call</button>
                <button><Icon name="trash"/>Bin It</button>
              </div>
              <button className="sendResponse"><Icon name="reply"/>Send Response</button>
            </div>
          </section>
        </div>
      </section>
    </div>
  </Shell>
}

function Field({label,value,wide=false}:{label:string;value:string;wide?:boolean}){
  return <label className={wide?"field wide":"field"}><span>{label}</span><input defaultValue={value}/></label>
}
function SelectField({label,value,options}:{label:string;value:string;options:string[]}){
  const [selected,setSelected]=useState(value);
  const [open,setOpen]=useState(false);
  return <div className={"field slideSelect "+(open?"open":"")}>
    <span>{label}</span>
    <div className="dropdownControl">
      <button type="button" className="dropdownTrigger fieldDropdownTrigger" onClick={()=>setOpen(!open)} aria-expanded={open}>
        <span>{selected}</span><b>⌄</b>
      </button>
      <div className="dropdownMenu fieldDropdownMenu">
        {options.map(option=><button type="button" className={option===selected?"selected":""} key={option} onClick={()=>{setSelected(option);setOpen(false)}}>{option}</button>)}
      </div>
    </div>
  </div>
}

function ActionDropdown({label,options}:{label:string;options:string[]}){
  const [open,setOpen]=useState(false);
  return <div className={"actionDropdown "+(open?"open":"")}>
    <button type="button" className="dropdownTrigger actionDropdownTrigger" onClick={()=>setOpen(!open)} aria-expanded={open}>
      <span>{label}</span><b>⌄</b>
    </button>
    <div className="dropdownMenu actionDropdownMenu">
      {options.map(option=><button type="button" key={option} onClick={()=>setOpen(false)}>{option}</button>)}
    </div>
  </div>
}
